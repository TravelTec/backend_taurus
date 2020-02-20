<?php

namespace App\Http\Docs;


/**
 * @OA\Tag(
 *     name="Licenses",
 *     description="Manager Licenses"
 * )
 *
 * @OA\Get(
 *   path="/api/licenses",  
 *   tags={"Licenses"},  
 *   @OA\Response(response=200, description="Success")
 * )
 * 
 * @OA\Get(
 *   path="/api/licenses/{id}",
 *   @OA\Parameter(
 *          name="id",
 *          description="License id",
 *          required=true,
 *          in="path",
 *          @OA\Schema(
 *              type="integer"
 *          )
 *      ),  
 *   tags={"Licenses"},  
 *   @OA\Response(response=200, description="Success"),
 *   @OA\Response(response=404, description="License Not Found")
 * )
 *
 * 
*/