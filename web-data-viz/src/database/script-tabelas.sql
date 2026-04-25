CREATE DATABASE copsAnalytics;
USE copsAnalytics;

-- 1. MAPA
CREATE TABLE mapa (
  idmapa INT AUTO_INCREMENT PRIMARY KEY,
  nome_mapa VARCHAR(60) NOT NULL,
  imagem_url VARCHAR(250)
);

-- 2. USUARIO
CREATE TABLE usuario (
  idusuario INT AUTO_INCREMENT PRIMARY KEY,
  nickname VARCHAR(100) NOT NULL,
  id_player INT,
  qt_pontos INT DEFAULT 0,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL
);

-- 3. ARMAMENTO
CREATE TABLE armamento (
  idarmamento INT AUTO_INCREMENT PRIMARY KEY,
  tipo_armamento VARCHAR(45) NOT NULL,
  imagem_url_armamento VARCHAR(250)
);

-- 4. SESAO_MAPA
CREATE TABLE sesao_mapa (
  idsesao_mapa INT AUTO_INCREMENT PRIMARY KEY,
  nome_sesao VARCHAR(200) NOT NULL,
  fk_mapa INT NOT NULL,
  
  CONSTRAINT fk_sessao_mapa_id FOREIGN KEY (fk_mapa) REFERENCES mapa (idmapa)
);

-- 5. PARTIDA
CREATE TABLE partida (
  idpartida INT AUTO_INCREMENT PRIMARY KEY,
  data_partida DATETIME DEFAULT CURRENT_TIMESTAMP,
  duracao_media INT,
  rounds_TR INT DEFAULT 0,
  rounds_CT INT DEFAULT 0,
  fk_usuario INT NOT NULL,
  fk_mapa INT NOT NULL,

  CONSTRAINT fk_partida_user FOREIGN KEY (fk_usuario) REFERENCES usuario (idusuario),
  CONSTRAINT fk_partida_map FOREIGN KEY (fk_mapa) REFERENCES mapa (idmapa)
);

-- 6. ROUND
CREATE TABLE round (
  idround INT AUTO_INCREMENT PRIMARY KEY,
  numero_round INT NOT NULL,
  vitoria_equipe VARCHAR(45),
  tempo_duracao INT,
  fk_partida INT NOT NULL,

  CONSTRAINT fk_round_part FOREIGN KEY (fk_partida) REFERENCES partida (idpartida)
);

-- 7. POSICAO_EVENTO (CORE DO HEATMAP, a idea pra por no mapa)
CREATE TABLE posicao_evento (
  idposicao_evento INT AUTO_INCREMENT PRIMARY KEY,
  tipo_evento VARCHAR(45) NOT NULL,
  posicao_x INT NOT NULL,
  posicao_y INT NOT NULL,
  fk_usuario INT NOT NULL,
  fk_round INT NOT NULL,
  fk_armamento INT NOT NULL,
  fk_sesao_mapa INT NOT NULL,

  CONSTRAINT fk_event_user FOREIGN KEY (fk_usuario) REFERENCES usuario (idusuario),
  CONSTRAINT fk_event_round FOREIGN KEY (fk_round) REFERENCES round (idround),
  CONSTRAINT fk_event_arma FOREIGN KEY (fk_armamento) REFERENCES armamento (idarmamento),
  CONSTRAINT fk_event_sessao FOREIGN KEY (fk_sesao_mapa) REFERENCES sesao_mapa (idsesao_mapa)
);