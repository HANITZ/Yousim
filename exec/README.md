- Spark 설치 ( in ubuntu )
    
    <aside>
    
    </aside>
    
    `sudo apt install scala git`
    
    Spark 다운로드
    
    `wget http://downloads.apache.org/spark/spark-3.3.0/spark-3.3.0-bin-hadoop3.tgz`
    
    Spark 파일 압축풀고 /opt/spark로 이동
    `sudo mkdir /opt/spark`

    `sudo tar xvf spark-3.3.0-bin-hadoop3.tgz`

    `sudo mv spark-3.3.0-bin-hadoop3.tgz /opt/spark
    
    환경변수 설정
    `echo "export SPARK_HOME=/opt/spark" >> ~/.bashrc`

    `echo "PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin" >> ~/.bashrc`
    
    `echo "export PYSPARK_PYTHON=/usr/bin/python3" >> ~/.bashrc`
    
   

- DB 접속 정보

    GUI : MongoDBCompass
    
    URI : mongodb://Ehxjfdjqhk:rmaksxjfdj@j7c203.p.ssafy.io:27017/admin
