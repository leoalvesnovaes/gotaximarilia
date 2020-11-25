<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'gotaximarilia' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|?bbg+d?iM5uO_C!ld(IN[4osU$P$dh(wCAaF{cHtA1J%f[Ayr,Qyh}~XF/EE$n4' );
define( 'SECURE_AUTH_KEY',  'qz]-xgT`bF+p+>$#]`aiPB6MXEZuFCc<YE7N{y)&*PVzq{8a#NE=fOKvDS/+%?+9' );
define( 'LOGGED_IN_KEY',    'f?P_1IgN{1KCJ(5,|~;5}@30$S0d55so-m&<}jQn0,c.l$mBW).]9HMaQ|Rgm+cq' );
define( 'NONCE_KEY',        'w*N[%9Da}hVKjf5Ze3fgK.i&nlZE0L-V22yU93|SvhP^OiL,7(b(&+qgJ$w`s>yC' );
define( 'AUTH_SALT',        '$NL?Fu&Q8A~v,b>L4~eIqKsvYbo<-wR;f^;F1g @7;PFzT9EOd0-uQDDDlb9M&4 ' );
define( 'SECURE_AUTH_SALT', 'SiDw9~W7$@_CC+-hF7%tQ k_W;#FJ-%NwOV;~9/vzOZuvZ5,kHUugZ3/D,EM(Xj[' );
define( 'LOGGED_IN_SALT',   '9EeMg)QrbMXnn7|]tb81s1X^W#t|6BWq0~y&vE~3J#Z./HUrAv0&RWxjyv?y(ii,' );
define( 'NONCE_SALT',       'PNL*[b74]}J~8.8R2lrKe{jRFu(o.[qOT%fOi1FX8{EdgMo^k><WHm,$]FU%MA,f' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
