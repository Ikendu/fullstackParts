const dns = require('dns');
console.log('dns servers', dns.getServers());
dns.resolveSrv('_mongodb._tcp.morelinks.8watgf1.mongodb.net', (err, addresses) => {
  if (err) {
    console.error('DNS resolveSrv failed:', err);
    process.exit(1);
  }
  console.log('DNS resolveSrv success:', JSON.stringify(addresses, null, 2));
});
