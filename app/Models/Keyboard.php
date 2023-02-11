<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keyboard extends Model
{
    use HasFactory;

    protected $fillable = [
        'sku',
        'brand',
        'product_name',
        'product_description',
        'full_title',
        'url',
        'img_path',
        'layout',
        'price',
        'frame_color',
        'primary_led_color',
        'hotswappable',
        'interfaces',
        'features',
        'available_switch_variants',
        'windows_compatible',
        'mac_compatible',
        'linux_compatible',
        'size',
        'dimensions',
        'weight',
    ];

}