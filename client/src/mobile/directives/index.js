import Vue from 'vue';

const directives = {
};

export default () => {
  const directiveList = Object.entries(directives);

  for(const [name, directive] of directiveList) {
    Vue.directive(name, directive);
  }
}