<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('keyboards', function (Blueprint $table) {
            $table->id();

            // Used to create unique IDs, like "Ducky_One_2_Mini"
            $table->index(['brand', 'product_name']);

            $table->string('upc');
            $table->string('sku', 100)->nullable();
            $table->string('brand', 25);
            $table->text('product_name');
            $table->text('product_description')->nullable();
            $table->text('full_title');
            $table->string('url', 200);
            $table->string('img_path', 200);

            $table->enum('layout', [
                'full',
                '1800',
                'tkl',
                '75',
                '65',
                '60',
                '40',
                'numpad',
            ]);

            $table->decimal('price', 7, 2);
            $table->string('frame_color', 50);
            $table->string('primary_led_color', 50);
            $table->boolean('hotswappable');

            $table->string('interfaces', 100); //usb-c, usb-a, bluetooth, etc

            $table->string('features', 100);

            $table->boolean('windows_compatible')->nullable();
            $table->boolean('mac_compatible')->nullable();
            $table->boolean('linux_compatible')->nullable();

            $table->string('dimensions', 100);
            $table->string('weight', 100)->nullable();
            // available_switch_variants  text
            // full_title text

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('keyboards');
    }
};