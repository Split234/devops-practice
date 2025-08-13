# Используем базовый образ Ubuntu
FROM ubuntu:20.04

# Отключаем интерактивный режим (чтобы не зависало при сборке)
ARG DEBIAN_FRONTEND=noninteractive

# Копируем файл внутрь контейнера
COPY info.txt /info.txt

# Команда по умолчанию
CMD ["cat", "/info.txt"]
