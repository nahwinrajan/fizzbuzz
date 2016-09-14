1.upto(100) do |n|
 res = ""
 res << "fizz" if n % 3 == 0
 res << "buzz" if n % 5 == 0
 res = n.to_s if res.empty?

 print res << " "
end
puts ""
