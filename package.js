Package.describe({
  summary: "Wrapper for node entities",
  version: "0.0.1",
  git: "http://github.com/andruschka/meteor-entities.git"
});
    
Npm.depends({
  "entities": "0.3.0"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.export("Entities");  
  api.add_files('entities.js', 'server');
});