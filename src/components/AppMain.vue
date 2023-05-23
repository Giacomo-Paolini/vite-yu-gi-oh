<script>
export default {
    name: "AppMain",
}
</script>

<template>
    <div class="container-fluid bg-warning">
        <div class="container">
            <div class="row">
                <select class="form-select w-25 p-2 mt-4" aria-label="Default select example">
                    <option selected>Alien</option>
                    <!-- <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> -->
                </select>
            </div>
        </div>
        <div class="container bg-light">
            <div class="row mt-4">
                <template>
                    <div class="cards"></div>
                </template>
            </div>
        </div>
    </div>
</template>