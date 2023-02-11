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


            // $table->string('upc', 100)->nullable()->default('');
            $table->string('sku', 100)->nullable();
            $table->string('brand', 25);
            $table->text('product_name');
            $table->text('product_description')->nullable();
            $table->text('available_switch_variants')->nullable();
            $table->text('full_title');
            $table->string('url', 200);
            $table->string('img_path', 200);

            // $table->enum('size', [
            //     'full',
            //     '1800',
            //     'tkl',
            //     '75',
            //     '65',
            //     '60',
            //     '40',
            //     'numpad',
            //     'other',
            // ])->nullable();
            $table->string('size', 10)->nullable();

            $table->decimal('price', 7, 2);
            $table->string('frame_color', 50)->nullable();
            $table->string('primary_led_color', 50)->nullable();
            $table->boolean('hotswappable')->nullable();

            $table->string('interfaces', 100)->nullable(); //usb-c, usb-a, bluetooth, etc

            $table->text('features')->nullable();

            $table->boolean('windows_compatible')->nullable();
            $table->boolean('mac_compatible')->nullable();
            $table->boolean('linux_compatible')->nullable();

            $table->string('dimensions', 100)->nullable();
            $table->string('weight', 100)->nullable();
            // available_switch_variants  text

            // Used to create unique IDs, like "Ducky_One_2_Mini"
            // $table->index(['brand', 'product_name']);

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