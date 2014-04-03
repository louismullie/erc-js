describe('RSCodec', function () {
  
  it ('should encode/decode properly', function () {
    
    var rs = new ReedSolomon(10);
    var enc = rs.encode('hello world');
    
    expect(enc).toEqual([
      104, 101, 108, 108, 111, 32, 119,
      111, 114, 108, 100, 237, 37, 84,
      196, 253, 253, 137, 243, 168, 170
    ]);
    
    expect(rs.decode(enc)).toEqual('hello world');
    
  });
  
  it ('should correct errors properly', function () {
    
    var rs = new ReedSolomon(10);
    var msg = ReedSolomon.Utils.arrayFill(10, 'hello world ').join('');
    var enc = rs.encode(msg);
    
    expect(enc).toEqual([
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100, 32,
      40, 171, 40, 207, 45, 222, 68, 85, 45, 171
    ]);
    
    expect(rs.decode(enc)).toEqual(msg);
    
    var errorLocations = [27, -3, -9, 7, 0];
    
    for (var i = 0; i < errorLocations.length; i++) {
      enc[errorLocations[i]] = 99;
      expect(rs.decode(enc)).toEqual(msg);
    }
    
    enc[82] = 99; enc[83] = 99; enc[84] = 99;
  
    expect(function () { rs.decode(enc) }).toThrow();
    
  });
  
  it ('should work with long input', function () {
    
    var rs = new ReedSolomon(10);
    var msg = ReedSolomon.Utils.arrayFill(10000, 'a').join('');
    var enc = rs.encode(msg);
    expect(rs.decode(enc)).toEqual(msg);
    enc[177] = 99;
    enc[2212] = 88;
    expect(rs.decode(enc)).toEqual(msg);
    
  })
  
});