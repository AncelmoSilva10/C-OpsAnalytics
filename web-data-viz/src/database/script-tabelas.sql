CREATE DATABASE copsAnalytics;
USE copsAnalytics;
-- DROP DATABASE copsAnalytics;
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
  qt_pontos INT NOT NULL,
  resultado TINYINT,
  CONSTRAINT fk_partida_result CHECK(resultado IN (1,0)),
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


SELECT * FROM usuario;
SELECT * FROM partida;
SELECT * FROM sesao_mapa;
SELECT * FROM round;
SELECT * FROM armamento;
SELECT * FROM posicao_evento;
SELECT * FROM mapa;

-- Cadastro dos Mapas
INSERT INTO mapa (nome_mapa, imagem_url) 
	VALUES 
		('Bureau', 'assets/mapas_calor/bureau'),
		('Canals', 'assets/mapas_calor/canals'),
		('Grounded', 'assets/mapas_calor/grounded'),
		('Legacy', 'assets/mapas_calor/legacy'),
		('Raid', 'assets/mapas_calor/raid'),
		('Plaza', 'assets/mapas_calor/plaza'),
		('Port', 'assets/mapas_calor/port'),
		('Soar', 'assets/mapas_calor/soar'),
		('Village', 'assets/mapas_calor/village');
        
-- Cadastro das sessões basicas dos mapas
-- 1. MAPA: BUREAU
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    1),
    ('Bomb B',    1),
    ('Meio',      1),
    ('Spawn TR',  1),
    ('Spawn CT',  1),
    ('Fundo A',   1),
    ('Fundo B',   1);

-- 2. MAPA: CANALS
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    2),
    ('Bomb B',    2),
    ('Meio',      2),
    ('Spawn TR',  2),
    ('Spawn CT',  2),
    ('Fundo A',   2),
    ('Fundo B',   2);

-- 3. MAPA: GROUNDED
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    3),
    ('Bomb B',    3),
    ('Meio',      3),
    ('Spawn TR',  3),
    ('Spawn CT',  3),
    ('Fundo A',   3),
    ('Fundo B',   3);

-- 4. MAPA: LEGACY
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    4),
    ('Bomb B',    4),
    ('Meio',      4),
    ('Spawn TR',  4),
    ('Spawn CT',  4),
    ('Fundo A',   4),
    ('Fundo B',   4);

-- 5. MAPA: RAID
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    5),
    ('Bomb B',    5),
    ('Meio',      5),
    ('Spawn TR',  5),
    ('Spawn CT',  5),
    ('Fundo A',   5),
    ('Fundo B',   5);

-- 6. MAPA: PLAZA
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    6),
    ('Bomb B',    6),
    ('Meio',      6),
    ('Spawn TR',  6),
    ('Spawn CT',  6),
    ('Fundo A',   6),
    ('Fundo B',   6);

-- 7. MAPA: PORT
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    7),
    ('Bomb B',    7),
    ('Meio',      7),
    ('Spawn TR',  7),
    ('Spawn CT',  7),
    ('Fundo A',   7),
    ('Fundo B',   7);

-- 8. MAPA: SOAR
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    8),
    ('Bomb B',    8),
    ('Meio',      8),
    ('Spawn TR',  8),
    ('Spawn CT',  8),
    ('Fundo A',   8),
    ('Fundo B',   8);

-- 9. MAPA: VILLAGE
INSERT INTO sesao_mapa (nome_sesao, fk_mapa) VALUES 
    ('Bomb A',    9),
    ('Bomb B',    9),
    ('Meio',      9),
    ('Spawn TR',  9),
    ('Spawn CT',  9),
    ('Fundo A',   9),
    ('Fundo B',   9);
    
 INSERT INTO armamento (tipo_armamento, imagem_url_armamento) 
	VALUES 
		('Rifle - Coalition (M4)', '../assets/armamento/m4.png'),
		('Rifle - Breach (AK-47)', '../assets/armamento/ak47.png'),
		('Pistola - Coalition (P250)', '../assets/armamento/p250.png'),
		('Pistola - Breach (GSR 1911)', '../assets/armamento/gsr.png'),
		('Pistola - Especial (Desert Eagle)', '../assets/armamento/deagle.png'),
		('SMG - Coalition (MP5)', '../assets/armamento/mp5.png'),
		('SMG - Breach (MP7)', '../assets/armamento/mp7.png'),
		('Sniper - Universal (Uratio)', '../assets/armamento/uratio.png'),
		('Corpo a Corpo - Universal (Knife)', '../assets/armamento/knife.png');   
