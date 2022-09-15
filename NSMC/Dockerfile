FROM python:3.6.4

COPY . /app

WORKDIR /app

RUN apt-get update && apt-get install -y sudo

RUN RUN apt-get install -y openjdk-8-jdk

RUN pip install --upgrade pip

RUN pip install -r requirement.txt


CMD ["flask", "run"]
