<template>
    <div>
      <!-- Nav bar -->  
      <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
        <div class="container">
          <router-link to="/" class="navbar-brand float-left">VueTest</router-link>
          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link to="/" class="nav-link pr-3">Create Order</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/list" class="nav-link">View Order</router-link>
            </li>
          </ul>
        </div>
      </nav>
  
      <!-- Router view -->
      <div class="container mt-5">
        <router-view></router-view>
      </div>
    </div>
  </template>