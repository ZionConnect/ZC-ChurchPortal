/**
 * Created by Josh Pagley on 5/28/14.
 */

angular.module('zcApp').factory('zcMessages', ['$resource', '$q', 'zcIdentity', function($resource, $q, zcIdentity) {

    var conversationsResource = $resource('/api/zionconnect/v1/church/conversation');
    var messagesResource = $resource('/api/zionconnect/v1/church/messages');

//    var socket = io.connect('http://localhost:3000');
//    socket.on('message', function(data){
//        console.log(data);
//    });

    var conversations = [];

   /* var testConversations = [{
        _id: 1,
        owner: 12345,
        members: [{'name': 'jeremy Pagley', '_id': 1234}],
        createdAt: new Date('5/4/2014'),
        updatedAt: new Date('5/4/2014'),
        messages: [{
            _id: 1,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.',
            createdAt: new Date('5/1/2014')
        },{
            _id: 2,
            sender_name: 'Jeremy Pagley',
            sender_type: 'member',
            sender_church: 12345,
            message: 'It was fun. Im glad you asked me to come and help!',
            createdAt: new Date('5/1/2014')
        },{
            _id: 3,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.',
            createdAt: new Date('5/4/2014')
        },{
            _id: 4,
            sender_name: 'Jeremy Pagley',
            sender_type: 'member',
            sender_church: 12345,
            message: 'Just let me know if your guys are ever short some again. I would be more than happy to help out.',
            createdAt: new Date('5/5/2014')
        },{
            _id: 5,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Thanks! We really appreciate it so much.',
            createdAt: new Date('5/10/2014')
        },{
            _id: 6,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.',
            createdAt: new Date('5/12/2014')
        },{
            _id: 7,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.',
            createdAt: new Date('5/14/2014')
        }]
    },{
        _id: 2,
        owner: 12345,
        members: [{'name': 'Josh Pagley', '_id': 5678}],
        createdAt: new Date('5/10/2014'),
        updatedAt: new Date('5/10/2014'),
        messages: [{
            _id: 1,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Hi josh, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.',
            createdAt: new Date('5/1/2014')
        },{
            _id: 2,
            sender_name: 'Josh Pagley',
            sender_type: 'member',
            sender_church: 12345,
            message: 'It was fun. Im glad you asked me to come and help!',
            createdAt: new Date('5/4/2014')
        },{
            _id: 3,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.',
            createdAt: new Date('5/4/2014')
        },{
            _id: 4,
            sender_name: 'Josh Pagley',
            sender_type: 'member',
            sender_church: 12345,
            message: 'Just let me know if your guys are ever short some again. I would be more than happy to help out.',
            createdAt: new Date('5/7/2014')
        },{
            _id: 5,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Thanks! We really appreciate it so much.',
            createdAt: new Date('5/9/2014')
        },{
            _id: 6,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.',
            createdAt: new Date('5/10/2014')
        },{
            _id: 7,
            sender_name: 'Hope Church',
            sender_type: 'church',
            sender_church: 12345,
            message: 'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.' +
                'Hi jeremy, I just wanted to say thanks for your help tonight with the tech. It was a pleasure having your there.',
            createdAt: new Date('5/11/2014')
        }]
    }] */

    function checkForPreExistingConversation(recipients){
        var preExistingConversation;

        conversations.forEach(function(conversation, index){
            var members = [];
            conversation.members.forEach(function(member){
                //Below where it says 'member.id' is where you can change
                //the field that gets searched for pre-existing conversations.
                members.push(member);
            });

            var alreadyExists = recipients.every(function(name){
                if(members.indexOf(name) != -1){
                    return true;
                } else {
                    return false;
                }
            });

            if(alreadyExists && conversation.members.length === recipients.length){
                preExistingConversation = conversation;
                preExistingConversation['index'] = index;
                return true;
            } else {
                return false;
            }
        });

        if(preExistingConversation){
            return preExistingConversation;
        } else {
            return false;
        }
    }

    function createConversationQueries(sender, recipients){
        var conversationQueries = [];

        recipients.push(sender._id);
        recipients.forEach(function(member){
            var members = recipients.filter(function(element){
                return element != member;
            });

            members.unshift({'owner': member});

            conversationQueries.push(members);
        });

        return conversationQueries;
    }

    function createConversation(sender, recipients, message){
        //Populate conversationQueries.
        var conversationQueries = createConversationQueries(sender, recipients);

        var conversationObj = {
            "sender": sender._id,
            "conversationQueries": conversationQueries,
            "message": {
                "name": sender.name,
                "sender": sender._id,
                "msg": message
            }
        };

        var promise = $q.defer();
        conversationsResource.save(conversationObj, function(result){
            console.log(result);
            conversations.push(result.conversation);
            promise.resolve(result.conversation);
        }, function(error){
            console.log(error);
            promise.reject(error);
        });

        return promise.promise;

    }

    return {
        getConversations: function(adminID){
            var promise = $q.defer();
            //Check for local conversations first.
            if(conversations.length > 0){
                console.log('Returning local conversations.');
                promise.resolve(conversations);
            } else {
                //Get conversations from server.
                conversationsResource.get({'owner': adminID}, function(result){
                    console.log('Getting conversations from server.');
                    conversations = result.conversations;
                    promise.resolve(conversations);
                }, function(error){
                    console.log(error);
                    promise.reject(error);
                });
            }
            return promise.promise;
        },
        deleteConversation: function(conversation){
            var promise = $q.defer();
            conversationsResource.delete({'conversation': conversation._id}, function(result){
                conversations.splice(conversation.index, 1);
                promise.resolve(result);
            }, function(error){
                console.log(error);
                promise.reject(error);
            });

            return promise.promise;
        },
        sendMessage: function(sender, recipients, message){
            var preExistingConversation = checkForPreExistingConversation(recipients);

            if(preExistingConversation){
                console.log('pre existing conversation exists.');

                var conversationQueries = createConversationQueries(sender, recipients);

                var msgObj = {
                    "conversation": preExistingConversation._id,
                    "conversationQueries": conversationQueries,
                    "message": {
                        "name": sender.name,
                        "sender": sender._id,
                        "msg": message
                    }
                }

                var promise = $q.defer();
                messagesResource.save(msgObj, function(result){
                    console.log(result);
                    conversations[preExistingConversation.index].messages.push(result.message);
                    promise.resolve(result.message);
                }, function(error){
                    console.log(error);
                    promise.reject(error);
                });

                return promise.promise;
            } else {
                console.log('Pre existing conversation does not exist.');
                //Conversation does not exist
                return createConversation(sender, recipients, message);
            }
        },
        deleteMessage: function(conversation, messageIndex){
           var message = conversations[conversation.index].messages[messageIndex];

            var promise = $q.defer();
            messagesResource.delete({'conversation': conversation._id, 'message': message._id}, function(result){
                conversations[conversation.index].messages.splice(messageIndex, 1);
                promise.resolve(result);
            }, function(error){
                promise.reject(error);
            });

            return promise.promise;
        }
    }
}]);