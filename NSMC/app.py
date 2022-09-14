from tensorflow.keras.layers import Embedding, Dense, LSTM
from tensorflow.keras.models import Sequential
from tensorflow.keras.models import load_model
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import re
import urllib.request
from konlpy.tag import Okt
from tqdm import tqdm
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

import os

import pickle

from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def hello():
    data = request.args.get('data', "단어")
    print(data)
    return sentiment_predict(data)


def load_tokenizer(path):
  with open(path, 'rb') as f:
    tokenizer = pickle.load(f)
  return tokenizer

loaded_model = load_model('best_model.h5')
okt = Okt()
stopwords = ['의','가','이','은','들','는','좀','잘','걍','과','도','를','으로','자','에','와','한','하다']

max_len = 30
load_dir = os.getcwd()
tokenizer_name = 'ssafy_naver_review_tokenizer.pickle'
tokenizer_path = os.path.join(load_dir, tokenizer_name)
tokenizer = load_tokenizer(tokenizer_path)

def sentiment_predict(new_sentence):
  new_sentence = re.sub(r'[^ㄱ-ㅎㅏ-ㅣ가-힣 ]','', new_sentence)
  new_sentence = okt.morphs(new_sentence, stem=True) # 토큰화
  new_sentence = [word for word in new_sentence if not word in stopwords] # 불용어 제거
  encoded = tokenizer.texts_to_sequences([new_sentence]) # 정수 인코딩
  pad_new = pad_sequences(encoded, maxlen = max_len) # 패딩
  score = float(loaded_model.predict(pad_new)) # 예측
  if(score > 0.5):
    print("{:.2f}% 확률로 긍정 리뷰입니다.\n".format(score * 100))
    return "{:.2f}% 확률로 긍정 리뷰입니다.\n".format(score * 100)
  else:
    print("{:.2f}% 확률로 부정 리뷰입니다.\n".format((1 - score) * 100))
    return "{:.2f}% 확률로 부정 리뷰입니다.\n".format((1 - score) * 100)
