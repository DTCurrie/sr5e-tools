<template>
  <main id="app" class="rg-app">
    <div class="container">
      <h1>SR5e Run Generator</h1>
      <div class="row">
        <h2>{{ title }}</h2>
        <div class="rg-app__run col fade" v-bind:class="[show && 'show']">
          <p>
            The runners go to a meet
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

import { rollDice } from "game-mechanics";

type RollResult = [string, number];

const getMeetLocation = (): RollResult => {
  const roll = rollDice();

  switch (roll) {
    case 1:
      return ["At a bar, club, or restaurant", roll];
    case 2:
      return [
        "At a warehouse, loading dock, or other underused location",
        roll
      ];
    case 3:
      return ["In the barrens district or some other urban hell hole", roll];
    case 4:
      return ["In a moving vehicle", roll];
    case 5:
      return ["In a Matrix host", roll];
    case 6:
      return ["In Astral space", roll];
    default:
      throw new Error("Roll out of bounds");
  }
};

const getEmployers = (): RollResult => {
  const roll = rollDice() + rollDice();

  switch (roll) {
    case 2:
      return ["A secret society", roll];
    case 3:
      return ["A political or activist group", roll];
    case 4:
      return ["A government or government agency", roll];
    case 5:
    case 6:
      return ["A minor corporation", roll];
    case 7:
    case 8:
      return ["A megacorporation", roll];
    case 9:
      return ["A criminal syndicate", roll];
    case 10:
      return ["A magical group", roll];
    case 11:
      return ["A private individual", roll];
    case 12:
      return ["An exotic or mysterious being", roll];
    default:
      throw new Error("Roll out of bounds");
  }
};

const getJob = (): RollResult => {
  const roll = rollDice();

  switch (roll) {
    case 1:
      return ["A data steal", roll];
    case 2:
      return ["An assassination or demolition", roll];
    case 3:
      return ["An extraction or insertion", roll];
    case 4:
      return ["A misdirection", roll];
    case 5:
      return ["A protection", roll];
    case 6:
      return ["A delivery", roll];
    default:
      throw new Error("Roll out of bounds");
  }
};

const getMacguffin = (): RollResult => {
  const roll = rollDice();

  switch (roll) {
    case 1:
      return ["A key employee", roll];
    case 2:
      return ["A prototype product", roll];
    case 3:
      return ["Cutting edge technology research]", roll];
    case 4:
      return ["A bioengineered life form", roll];
    case 5:
      return ["A Magical object", roll];
    case 6:
      return [
        "An urban building, rural location, or infrastructure object",
        roll
      ];
    default:
      throw new Error("Roll out of bounds");
  }
};

const getTwist = (): RollResult => {
  const roll = rollDice();

  switch (roll) {
    case 1:
      return ["Security is unexpectedly high", roll];
    case 2:
      return ["A third party is also interested", roll];
    case 3:
      return [
        "The target is not what it appears to be (group was lied to)",
        roll
      ];
    case 4:
      return ["The job requires a rare piece of equipment", roll];
    case 5:
      return ["Target has been moved or is being moved", roll];
    case 6:
      return ["The employer decides to double-cross them", roll];
    default:
      throw new Error("Roll out of bounds");
  }
};

const printResult = ([text, roll]: RollResult) => `${text} (${roll})`;

export default Vue.extend({
  name: "RunGenerator",
  data: function() {
    return {
      meetLocation: printResult(getMeetLocation()),
      employers: printResult(getEmployers()),
      job: printResult(getJob()),
      macguffin: printResult(getMacguffin()),
      twist: printResult(getTwist()),
      show: false
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    getRun: function() {
      this.show = false;

      setTimeout(() => {
        this.meetLocation = printResult(getMeetLocation());
        this.employers = printResult(getEmployers());
        this.job = printResult(getJob());
        this.macguffin = printResult(getMacguffin());
        this.twist = printResult(getTwist());

        this.show = true;
      }, 500);
    }
  }
});
</script>

<style lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/transitions";
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/print";
</style>
