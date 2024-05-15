FROM clojure:openjdk-11-lein-slim-buster

WORKDIR /app

# Download Datadog Java Agent
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get clean
RUN curl -sLo dd-java-agent.jar https://repo1.maven.org/maven2/com/datadoghq/dd-java-agent/1.9.0/dd-java-agent-1.9.0.jar
RUN apt-get remove -y curl
RUN apt-get clean

COPY api/project.clj .

COPY api/managed_dependencies.edn .

ARG github_packages_user
ARG github_packages_token

RUN GITHUB_PACKAGES_USER=$github_packages_user GITHUB_PACKAGES_TOKEN=$github_packages_token lein deps

COPY api/resources ./resources
COPY api/src ./src
COPY api/test ./test
COPY config/test.env ./
COPY api/dev-resources ./dev-resources

RUN bash -c "source ./test.env && lein test-all && lein with-profile deploy uberjar"

EXPOSE 8080
CMD exec java \
    -javaagent:/app/dd-java-agent.jar \
    -XX:-OmitStackTraceInFastThrow \
    -jar target/deploy.jar -p 8080
