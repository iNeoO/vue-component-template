import {{camelcase name}} from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {{camelcase name}}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
