<?php

namespace Buttonizer\Api\PageRules\WordPressData;

use  Buttonizer\Utils\Maintain ;
/**
 * WordPress Buttonizer API
 * 
 * @endpoint /wp-json/buttonizer/pagerules/pages
 * @methods GET
 */
class ApiPages
{
    /**
     * Register route
     */
    public function registerRoute()
    {
        register_rest_route( 'buttonizer', '/page_rules/pages', [ [
            'methods'             => [ 'GET' ],
            'args'                => [
            'nonce' => [
            'validate_callback' => function ( $value ) {
            return wp_verify_nonce( $value, 'wp_rest' );
        },
            'required'          => true,
        ],
        ],
            'callback'            => [ $this, 'get' ],
            'permission_callback' => function () {
            return Maintain::hasPermission();
        },
        ] ] );
    }
    
    /**
     * Get page rules pages
     */
    public function get()
    {
        return \Buttonizer\Api\Api::needButtonizerPremium();
    }

}