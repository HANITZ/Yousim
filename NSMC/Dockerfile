FROM openjdk:17-jdk-alpine

FROM python:3.6.4

COPY . /app

WORKDIR /app

RUN apt-get update && apt-get install -y sudo

RUN sudo apt-get install openjdk-8-jdk -y

RUN pip install --upgrade pip

RUN pip install -r requirement.txt


CMD ["flask", "run"]
