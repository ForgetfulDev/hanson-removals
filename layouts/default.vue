<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <div class="row">
          <div class="col">
            <img class="img-fluid" src="~/assets/images/hansonremovals-logo.jpg" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p id="under-logo" class="primary">Your local residential and commercial moving company</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12">
        <div class="row">
          <div class="col">
            <p id="heading-description" class="primary">RELOCATIONS, REMOVALS, PACKING AND STORAGE</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src="~/assets/images/red-phone-sillouette.png" />
          </div>
          <div class="col">
            <a id="heading-phone" class="primary" href="tel:03%20453%206575">03 453 6575</a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="primary">
              Servicing Dunedin, Christchurch, Southland
              <br />and throughout Central Otago
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg p-0">
      <button
        class="navbar-toggler primary-bg"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          class="bi bi-chevron-double-down"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 01.708 0L8 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M1.646 2.646a.5.5 0 01.708 0L8 8.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div class="collapse navbar-collapse primary-bg" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
          <li v-for="route in $router.options.routes" :key="route.path">
            <nuxt-link
              class="nav-link text-white pl-2"
              :active-class="route.path"
              :to="route.path"
            >{{ route.name == 'index' ? 'HOME' : route.name.toUpperCase() }}</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<style lang="sass">
$heading-font-size: 1.2em
$primary-color: #971843

#navbarSupportedContent
  border-radius: 0.4em

#under-logo
  font-size: $heading-font-size

#heading-description
  font-size: $heading-font-size
  font-weight: bold

#heading-phone
  font-size: $heading-font-size
  font-weight: 800

.primary
  color: $primary-color

.primary-bg
  background-color: $primary-color
  color: white

hr
  color: #a6a6a6
</style>