-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 12, 2016 at 02:40 PM
-- Server version: 5.5.46
-- PHP Version: 5.3.10-1ubuntu3.21

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `SistemaCurriculum`
--

-- --------------------------------------------------------

--
-- Table structure for table `InfoCandidato`
--

CREATE TABLE IF NOT EXISTS `InfoCandidato` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `InfoCandidato`
--

INSERT INTO `InfoCandidato` (`id`, `nome`, `cpf`, `email`, `senha`) VALUES
(1, '', '', '', ''),
(2, 'ricardo', '34324', 'ricardo@hotmail.com', '1234'),
(3, 'nina', '34324', 'ricardo@hotmail.com', '222');

-- --------------------------------------------------------

--
-- Table structure for table `vagas`
--

CREATE TABLE IF NOT EXISTS `vagas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) CHARACTER SET latin1 NOT NULL,
  `empresa` varchar(30) CHARACTER SET latin1 NOT NULL,
  `local` varchar(50) CHARACTER SET latin1 NOT NULL,
  `qtdade` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `vagas`
--

INSERT INTO `vagas` (`id`, `nome`, `empresa`, `local`, `qtdade`) VALUES
(1, 'auxiliar de limpeza', 'NESTLE', 'rua A', 4),
(2, 'ESTAGIO WMS - BUSINESS INTELIGENCE', 'Itau Unibanco', 'Centro Empresarial Itau Unibanco Conceicao', 1),
(3, 'analista de risco', 'xp investimentos', 'av. brigadeiro faria lima, Sao Paulo, SP', 3),
(4, 'economista', 'banco do brasil', 'av. brigadeiro faria lima, Sao Paulo, SP', 2),
(5, 'engenheiro mecanico', 'volvo', 'av. paulista, Sao Paulo, SP', 6),
(6, 'engenheiro civil', 'oderbretch', 'av. paulista, Sao Paulo, SP', 9),
(8, 'programador', 'java sun', 'rua z', 3),
(9, 'construtor', 'oas', 'rua b', 4),
(10, 'design de interiores', 'Rita''s company', 'av. pualista, 1098', 5);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
