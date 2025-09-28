import * as core from '@actions/core';
import * as exec from '@actions/exec';

async function main() {
  const folder = core.getInput('SURGE-PROJECT-PATH', { required: false, trimWhitespace: true });
  const domain = core.getInput('SURGE-DOMAIN', { required: true, trimWhitespace: true });
  const email = core.getInput('SURGE-EMAIL', { required: true, trimWhitespace: true });
  const token = core.getInput('SURGE-TOKEN', { required: true, trimWhitespace: true });

  return await exec.exec(`npx surge --token ${token} --login ${email} ${folder} ${domain}`);
}

await main();
