# Build Stage
FROM gradle:8.5-jdk17 AS builder

WORKDIR /app

# 캐시 최적화 (의존성 먼저)
COPY gradlew .
COPY gradle gradle
COPY build.gradle* settings.gradle* ./
RUN ./gradlew dependencies --no-daemon || true

COPY . .
RUN gradle clean build -x test

# Run Stage
FROM eclipse-temurin:17-jre

WORKDIR /app
COPY --from=builder /app/build/libs/*.jar app.jar

ENV SPRING_PROFILES_ACTIVE=prod

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
