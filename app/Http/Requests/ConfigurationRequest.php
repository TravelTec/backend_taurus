<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ConfigurationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required',
            'attendance'=>'required',
            'monday_open'=>'required_if:attendance,1',
            'monday_close'=>'required_if:attendance,1',
            'tuesday_open'=>'required_if:attendance,1',
            'tuesday_close'=>'required_if:attendance,1',
            'wednesday_open'=>'required_if:attendance,1',
            'wednesday_close'=>'required_if:attendance,1',
            'thursday_open'=>'required_if:attendance,1',
            'thursday_close'=>'required_if:attendance,1',
            'friday_open'=>'required_if:attendance,1',
            'friday_close'=>'required_if:attendance,1',
            'saturday_open'=>'required_if:attendance,1',
            'saturday_close'=>'required_if:attendance,1',
            'sunday_open'=>'required_if:attendance,1',
            'sunday_close'=>'required_if:attendance,1',
        ];
    }
}
