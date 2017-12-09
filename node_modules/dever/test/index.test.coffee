index = require('../index')

describe 'dever.version)', ->
  it 'should have a version', ->
    index.version.should.be.a 'string'
