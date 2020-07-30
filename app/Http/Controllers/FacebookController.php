<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use FacebookAds\Api;
use FacebookAds\Object\ProductCatalog;
use FacebookAds\Object\Fields\ProductCatalogFields;

use App\Services\FacebookService;

class FacebookController extends Controller
{
    
    private $facebookService;

    public function __construct(FacebookService $facebookService) {
        $this->facebookService = $facebookService;
    }
 
    public function index() {
    
        $appId = "244755760115365";
        $appSecret = "24437445f9599763966c2738d4df95da";
        $accessToken = "EAADemqQjbqUBAKIeyCZCZAcCZADAGFB6EvYbIsQH5O82RG8wZAQl9wgGmrc0HhZAZBVjhPSY5Jz33x2svzamihoWTbMT40M3WBjYbzHHPnVywZClRTf8V01JPmZB79TZB5ZAGqUq8SumagVjBn8m2hbtLJetopIfjoLfDvberWqz21YQZDZD";

        Api::init($appId, $appSecret, $accessToken);

        $api = Api::instance();

        $productCatalog = new ProductCatalog("678605722696065");
        $products = $productCatalog->getProducts(['name']);

        $result = [];

        if ($products->count() > 0) {
            foreach ($products as $prod) {
                $result[] = [
                    'name'=>$prod->{ProductCatalogFields::NAME}.PHP_EOL
                ];
            }
              
        }

        return $this->buildResponse($result);
    }

    public function products(Request $request) {
        return $this->buildResponse($this->facebookService->products($request->get('config_chatpro')));
    }

    public function photos(Request $request) {
        return $this->buildResponse($this->facebookService->photos($request->get('config_chatpro')));
    }

    public function posts(Request $request) {
        return $this->buildResponse($this->facebookService->posts($request->get('config_chatpro')));
    }

    public function productById($id, Request $request) {
        return $this->buildResponse($this->facebookService->getProduct($id ,$request->get('config_chatpro')));
    }

    public function createProduct(Request $request) {
        return $this->facebookService->createProduct($request, $request->get('config_chatpro'));
    }

    public function createPost(Request $request) {
        return $this->facebookService->createPost($request, $request->get('config_chatpro'));
    }

    public function updateProduct($id ,Request $request) {
        return $this->facebookService->updateProduct($id, $request, $request->get('config_chatpro'));
    }

    public function deleteProduct($id ,Request $request) {
        $this->facebookService->deleteProduct($id, $request->get('config_chatpro'));
        return response(null, 204);
    }

}
