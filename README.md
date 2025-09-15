# sprechen

a real time chat application where you can post anything, the cool thing is that its pretty unfiltered.

the features i am looking to implement -
-file/avatar uploads
-direct messaging
-group chats
-secret chat funcn
-real time typing indicators
-emoji reactions
-posts
-comments
-likes

performance -
-redis caching for latency
-offload files/avatars to cloudinary
-sliding window with redis for rate limiting
-socket.io and JWT for security and real time messages
-deployed on vercal and backend(express,redis,mongoDB)
