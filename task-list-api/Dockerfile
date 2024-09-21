FROM amazoncorretto:17.0.0-alpine

WORKDIR /app

COPY ./target/*.jar ./app.jar

ENTRYPOINT ["java", "-jar","/app/app.jar"]