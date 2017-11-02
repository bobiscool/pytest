import socket

HOST = ''
PORT = 8888

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.connect(('www.baidu.com', 80))


