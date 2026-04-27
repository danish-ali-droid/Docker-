FROM python:3.10-slim
WORKDIR /code
COPY requirements.txt /code
COPY .  /code
RUN pip install -r requirements.txt
EXPOSE 5000
ENTRYPOINT ["python3"]
CMD [ "app.py"]

