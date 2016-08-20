import Jasmine from 'jasmine'; // eslint-disable-line import/no-extraneous-dependencies
import SpecReporter from 'jasmine-spec-reporter'; // eslint-disable-line import/no-extraneous-dependencies, max-len

const jasmine = new Jasmine();
jasmine.loadConfig({
  spec_dir: 'src/electron',
  spec_files: ['**/__tests__/*-test.{js,jsx}'],
});
jasmine.configureDefaultReporter({ print: () => {} });
jasmine.env.addReporter(new SpecReporter());
jasmine.execute();
