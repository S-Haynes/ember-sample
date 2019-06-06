import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return ["Bob Mackadoo", "Billy Cartwright", "Ric Bucher"];
  }
});
