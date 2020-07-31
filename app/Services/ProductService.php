<?php 

namespace App\Services;

use App\Configuration;
use Illuminate\Http\Request;

class ProductService {

    private $facebookService;
    private $chatProService;

    public function __construct(
        FacebookService $facebookService, 
        ChatProService $chatProService) {

        $this->facebookService = $facebookService;
        $this->chatProService = $chatProService;            
    }

    public function sendProduct($productId, $request, Configuration $config) {

        $product = $this->facebookService->getProduct($productId, $config);
        $n = urlencode('\n');

        if ($product['name'] != null) {
            $requestChatPro = new Request();
            $requestChatPro->merge([
                'caption'=>'*' . $product['name']  . '*,' . 
                            ' _' . $product['description'] . '_, ' .
                            'Preço: *' . $product['price'] . '*, ' .
                            'Link: https://www.facebook.com/commerce/products/'. $product['id'] .'/',
                'url'=>$product['image_url'],
                'number'=>$request->get('number')
            ]);
            
            return $this->chatProService->sendFile($requestChatPro, $config);            
        } else {
            return ['error'=>$product];
        }
        
    }

}

