<?php 

namespace App\Services;

use App\Configuration;
use FacebookAds\Api;
use FacebookAds\Object\ProductCatalog;
use FacebookAds\Object\ProductItem;
use FacebookAds\Object\Page;
use FacebookAds\Object\Fields\ProductItemFields;
use FacebookAds\Object\Fields\ProductCatalogCategoryFields;
use FacebookAds\Object\Fields\PhotoFields;
use FacebookAds\Object\Fields\PagePostFields;
use App\Exceptions\ServiceException;
use FacebookAds\Logger\CurlLogger;

use Illuminate\Support\Str;

class FacebookService {

    const FIELDS_PRODUCT = [
        ProductItemFields::ID, 
        ProductItemFields::NAME, 
        ProductItemFields::IMAGE_URL, 
        ProductItemFields::PRICE,
        ProductItemFields::DESCRIPTION,
        ProductItemFields::VISIBILITY,
        ProductItemFields::RETAILER_ID,
        ProductItemFields::CATEGORY,
        ProductItemFields::BRAND,
        ProductItemFields::GTIN,
        ProductItemFields::URL,
    ];

    const FIELDS_PHOTO = [
        PhotoFields::ID, 
        PhotoFields::NAME,
        PhotoFields::PICTURE,        
    ];

    const FIELDS_POST = [
        PagePostFields::ID,        
        PagePostFields::MESSAGE,
        PagePostFields::PICTURE,

    ];

    private $appId;
    private $appSecret;
    private $accessToken;
    private $api;

    public function __construct() {
        $this->appId = env("FACEBOOK_APP_ID");
        $this->appSecret = env("FACEBOOK_APP_SECRET");
        $this->accessToken = env("FACEBOOK_SECRET_TOKEN");

        Api::init($this->appId, $this->appSecret, $this->accessToken);
        $this->api = Api::instance();
        $this->api->setLogger(new CurlLogger());
    }

    public function products(Configuration $config) {

        if ($config->catalog_id != null) {

            try {

                $productCatalog = new ProductCatalog($config->catalog_id);    

                $products = $productCatalog->getProducts(self::FIELDS_PRODUCT);

                return $this->deserializeCursor($products, self::FIELDS_PRODUCT);
            } catch (\Exception $ex) {
                throw new ServiceException($ex->getMessage(), 400);        
            }
        }

        throw new ServiceException("Catalog id not configured", 400);

    }

    public function photos(Configuration $config) {
        if ($config->page_id != null) {
            try {

                $page = new Page($config->page_id);

                $feed = $page->getPhotos(self::FIELDS_PHOTO);

                return $this->deserializeCursor($feed, self::FIELDS_PHOTO);
            } catch (\Exception $ex) {      
             
                throw new ServiceException($ex->getMessage() ." | " . $ex->getErrorUserMessage(), 400);        
            }
        }

        throw new ServiceException("Page id not configured", 400);
    }

    public function posts(Configuration $config) {
        if ($config->page_id != null) {
            try {

                $page = new Page($config->page_id);

                $posts = $page->getPosts(self::FIELDS_POST);

                return $this->deserializeCursor($posts, self::FIELDS_POST);
            } catch (\Exception $ex) {      
             
                throw new ServiceException($ex->getMessage() ." | " . $ex->getErrorUserMessage(), 400);        
            }
        }

        throw new ServiceException("Page id not configured", 400);
    }
    
    //TODO Aguardando permissão do token do facebook para testar
    public function createPost($request, Configuration $config) {
        if ($config->page_id != null) {
            try {

                $page = new Page($config->page_id);

                $values = [
                    PagePostFields::MESSAGE=>$request->get('message'),
                    PagePostFields::PICTURE=>$request->get('image'),
                ];

                $post = $page->createFeed(self::FIELDS_POST);

                return $post->exportAllData();
            } catch (\Exception $ex) {      
             
                throw new ServiceException($ex->getMessage() ." | " . $ex->getErrorUserMessage(), 400);        
            }
        }

        throw new ServiceException("Page id not configured", 400);
    }

    public function createProduct($request, Configuration $config) {
        if ($config->catalog_id != null) {

            try {

                $productCatalog = new ProductCatalog($config->catalog_id);    

                $values = [
                    ProductItemFields::NAME =>$request->get('name'),
                    ProductItemFields::IMAGE_URL=>$request->get('image'),
                    ProductItemFields::PRICE=>$request->get('price') * 100,
                    ProductItemFields::DESCRIPTION=>$request->get('description'),        
                    ProductItemFields::CURRENCY=>"BRL",
                    ProductItemFields::RETAILER_ID=>(string)Str::uuid(),        
                    ProductItemFields::CATEGORY=>$request->get('category') ?? "default",
                    ProductItemFields::BRAND=>$request->get('brand') ?? "default",
                    ProductItemFields::URL=>$request->get('url') ?? "https://web.facebook.com/",

                ];

                $product = $productCatalog->createProduct(self::FIELDS_PRODUCT, $values);
        
                return $product->exportAllData();
            } catch (\Exception $ex) {      
             
                throw new ServiceException($ex->getMessage() ." | " . $ex->getErrorUserMessage(), 400);        
            }
        }

        throw new ServiceException("Catalog id not configured", 400);
    }

    public function updateProduct($id, $request, Configuration $config) {

        if ($config->catalog_id != null) {
            try {

                $product = new ProductItem($id);    
                
                $values = [
                    ProductItemFields::NAME =>$request->get('name'),
                    ProductItemFields::IMAGE_URL=>$request->get('image'),
                    ProductItemFields::PRICE=>$request->get('price') * 100,
                    ProductItemFields::DESCRIPTION=>$request->get('description'),        
                    ProductItemFields::CURRENCY=>"BRL",
                    ProductItemFields::RETAILER_ID=>(string)Str::uuid(),        
                    ProductItemFields::CATEGORY=>$request->get('category') ?? "default",
                    ProductItemFields::BRAND=>$request->get('brand') ?? "default",
                    ProductItemFields::URL=>$request->get('url') ?? "https://web.facebook.com/",

                ];

                $product = $product->updateSelf(self::FIELDS_PRODUCT, $values);
        
                return $product->exportAllData();
            } catch (\Exception $ex) {      
             
                throw new ServiceException($ex->getMessage() ." | " . $ex->getErrorUserMessage(), 400);        
            }
        }

        throw new ServiceException("Catalog id not configured", 400);
    }

    public function getProduct($id, Configuration $config) {

        if ($config->catalog_id != null) {
            try {

                $product = (new ProductItem($id))->getSelf(self::FIELDS_PRODUCT);    
                
                return $product->exportAllData();
            } catch (\Exception $ex) {      
             
                throw new ServiceException($ex->getMessage() ." | " . $ex->getErrorUserMessage(), 400);        
            }
        }

        throw new ServiceException("Catalog id not configured", 400);
    }

    public function deleteProduct($id, Configuration $config) {

        if ($config->catalog_id != null) {
            try {

                (new ProductItem($id))->deleteSelf();   
                return;
            } catch (\Exception $ex) {      
             
                throw new ServiceException($ex->getMessage() ." | " . $ex->getErrorUserMessage(), 400);        
            }
        }

        throw new ServiceException("Catalog id not configured", 400);
    }

    private function deserializeCursor($cursor, $fields) {
        $result = [];
        $i = 0;
        if ($cursor->count() > 0) {
            foreach($cursor as $item) {
                foreach ($fields as $fieldName) {
                    $result[$i][$fieldName] = $item->{$fieldName};
                }
                $i++;
            }
        }

        return $result;
    }

}