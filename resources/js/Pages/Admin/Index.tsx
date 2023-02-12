import { useState } from "react";
import Products from "./products.json";
import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";

import { useForm, router as InertiaRouter } from "@inertiajs/react";
import { without } from "lodash";

const DELIMITER_TOKEN = "|||";

const joinArrayValues = (object, keys) => {
    const withJoinedValues = { ...object };

    keys.forEach((key) => {
        if (withJoinedValues[key]) {
            withJoinedValues[key] = object[key].join(DELIMITER_TOKEN);
        }
    });

    return withJoinedValues;
};

const convertYesNoToBoolean = (object, keys) => {
    const withBooleanValues = { ...object };

    keys.forEach((key) => {
        if (withBooleanValues[key]) {
            const lowered = object[key].toLowerCase();
            withBooleanValues[key] = lowered === "yes";
        }
    });

    return withBooleanValues;
};

const nullifyNullishStrings = (object) => {
    const withNullifiedValues = { ...object };

    const nullishStrings = ["none", "null", "n/a", ""];

    Object.keys(object).forEach((key) => {
        const isNullAlready = object[key] === null;
        const isString = typeof object[key] === "string";

        if (!isNullAlready && isString) {
            const lowered = object[key].toLowerCase();
            const isNullish = nullishStrings.includes(lowered);

            if (isNullish) {
                withNullifiedValues[key] = null;
            }
        }
    });

    return withNullifiedValues;
};

const unifyKeyboardSizeTerminology = (object) => {
    const withUnifiedValues = { ...object };
    const key = {
        "full size": "full",
        tenkeyless: "tkl",
        "75%": "75",
        "65%": "65",
        "60%": "60",
        "40%": "40",
    };
    if (Object.keys(key).includes(object.size)) {
        // Re-maps "tenkeyless" to "tkl", etc
        withUnifiedValues.size = key[object.size];
    }
    return withUnifiedValues;
};

const removeMetadata = (object) => {
    const withoutMetadata = { ...object };
    delete withoutMetadata["_type"];
    return withoutMetadata;
};

const removeCurrencySymbol = (object) => {
    const withoutCurrencySymbol = { ...object };
    withoutCurrencySymbol.price = object.price.replace("$", "");
    return withoutCurrencySymbol;
};

const transformProduct = (product) => {
    const newProduct = { ...product };

    const transformations = [
        (product) =>
            joinArrayValues(product, [
                "available_switch_variants",
                "features",
                "interfaces",
            ]),
        (product) => convertYesNoToBoolean(product, ["hotswappable"]),
        (product) => nullifyNullishStrings(product),
        (product) => unifyKeyboardSizeTerminology(product),
        (product) => removeMetadata(product),
        (product) => removeCurrencySymbol(product),
    ];

    return transformations.reduce(
        (acc, transformer) => transformer(acc),
        newProduct
    );
};

const AdminIndex = ({ auth, errors, uploadedState, uploadedData }) => {
    const {
        data,
        setData,
        post,
        processing,
        reset,
        errors: formErrors,
        transform,
    } = useForm({
        file: "",
        products: [],
    });

    const handleTransformations = async () => {
        const fileText = await data.file.text();
        const productData = JSON.parse(fileText);
        const transformedProductData = productData.map(transformProduct);
        return { data: transformedProductData };
    };

    const submit = async (e) => {
        e.preventDefault();

        // Workaround until we can use "post" directly
        // Wait until following is fixed: https://github.com/inertiajs/inertia/issues/1131
        // transform(async (data) => {
        //     const transformedData = await handleTransformations(data);
        //     console.log(transformedData);
        //     return transformedData;
        // });
        // post(route("admin.batch"));
        const transformedData = await handleTransformations();
        InertiaRouter.post(route("admin.batch"), transformedData);
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Keyboard Product Data: Upload Panel
                </h2>
            }
        >
            <Head title="Admin" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {uploadedState ? "Uploaded" : "Not Yet Uploaded"}
                        </div>
                        <br />
                        <div className="max-w-2xl mx-auto sm:px-6 md:px-8 py-12">
                            <form onSubmit={submit} className="mx-auto md:px-8">
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                    htmlFor="file_input"
                                >
                                    Upload JSON file
                                </label>
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-1"
                                    id="file_input"
                                    type="file"
                                    onChange={async (e) =>
                                        setData("file", await e.target.files[0])
                                    }
                                />

                                <InputError
                                    message={formErrors.message}
                                    className="mt-2"
                                />
                                <PrimaryButton
                                    className="mt-4"
                                    processing={processing}
                                >
                                    Process JSON
                                </PrimaryButton>
                            </form>
                            {uploadedData && (
                                <>
                                    <h1>Uploaded Data</h1>
                                    <pre>
                                        {JSON.stringify(uploadedData, null, 2)}
                                    </pre>
                                </>
                            )}
                            {data.products.map((product) => (
                                <div>{product.product_name}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AdminIndex;
