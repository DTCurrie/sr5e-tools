<template>
  <main id="app" class="rg-app">
    <div class="container">
      <h1>SR5e Run Generator</h1>
      <div class="row">
        <!-- TODO: <h2>{{ title }}</h2> -->
        <div class="rg-app__run col fade" v-bind:class="[show && 'show']">
          <p>
            The runners agree to meet
            <strong>{{ meetLocation }}</strong>
            for their next job. They are hired by
            <strong>{{ employers }}</strong>
            for
            <strong>{{ job }}</strong>
            job, targeting
            <strong>{{ macguffin }}</strong>
            . The run gets complicated when
            <strong>{{ twist }}</strong>
            .
          </p>
        </div>
      </div>
      <div class="row">
        <div class="rg-app__controls col d-flex flex-row justify-content-end">
          <button class="btn btn-primary" v-on:click="getRun">
            Generate Run
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";

import { createDicePool } from "game-mechanics";

import {
  barName,
  commercialLocation,
  matrixHostName,
  movingVehicle,
  urbanHellHole,
} from "@/utils/meet-locations";

const getMeetLocation = (): string => {
  const roll = createDicePool().roll();

  switch (roll) {
    case 1:
      return `at the ${barName()}`;
    case 2:
      return `at a ${commercialLocation().toLowerCase()}`;
    case 3:
      return `in the ${urbanHellHole()}`;
    case 4:
      return `while ${movingVehicle()}`;
    case 5:
      return `in the ${matrixHostName()} matrix host`;
    case 6:
      return "in the Astral Plane";
    default:
      throw new Error("Roll out of bounds");
  }
};

const getEmployers = (): string => {
  const roll = createDicePool({ count: 2 }).roll();

  switch (roll) {
    case 2:
      return "A secret society";
    case 3:
      return "A political or activist group";
    case 4:
      return "A government or government agency";
    case 5:
    case 6:
      return "A minor corporation";
    case 7:
    case 8:
      return "A megacorporation";
    case 9:
      return "A criminal syndicate";
    case 10:
      return "A magical group";
    case 11:
      return "A private individual";
    case 12:
      return "An exotic or mysterious being";
    default:
      throw new Error("Roll out of bounds");
  }
};

const getJob = (): string => {
  const roll = createDicePool().roll();

  switch (roll) {
    case 1:
      return "A data steal";
    case 2:
      return "An assassination or demolition";
    case 3:
      return "An extraction or insertion";
    case 4:
      return "A misdirection";
    case 5:
      return "A protection";
    case 6:
      return "A delivery";
    default:
      throw new Error("Roll out of bounds");
  }
};

const getMacguffin = (): string => {
  const roll = createDicePool().roll();

  switch (roll) {
    case 1:
      return "A key employee";
    case 2:
      return "A prototype product";
    case 3:
      return "Cutting edge technology research]";
    case 4:
      return "A bioengineered life form";
    case 5:
      return "A Magical object";
    case 6:
      return "An urban building, rural location, or infrastructure object";
    default:
      throw new Error("Roll out of bounds");
  }
};

const getTwist = (): string => {
  const roll = createDicePool().roll();

  switch (roll) {
    case 1:
      return "Security is unexpectedly high";
    case 2:
      return "A third party is also interested";
    case 3:
      return "The target is not what it appears to be (group was lied to)";
    case 4:
      return "The job requires a rare piece of equipment";
    case 5:
      return "Target has been moved or is being moved";
    case 6:
      return "The employer decides to double-cross them";
    default:
      throw new Error("Roll out of bounds");
  }
};

export default Vue.extend({
  name: "RunGenerator",
  data: function () {
    return {
      meetLocation: getMeetLocation(),
      employers: getEmployers(),
      job: getJob(),
      macguffin: getMacguffin(),
      twist: getTwist(),
      show: false,
    };
  },
  mounted: function () {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    getRun: function () {
      this.show = false;

      setTimeout(() => {
        this.meetLocation = getMeetLocation();
        this.employers = getEmployers();
        this.job = getJob();
        this.macguffin = getMacguffin();
        this.twist = getTwist();

        this.show = true;
      }, 500);
    },
  },
});
</script>
