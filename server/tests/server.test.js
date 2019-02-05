const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// testing lifecycle method
beforeEach((done) => {
    // clears database
    Todo.remove({}).then(() => done());
});


//Mocha describe is for grouping, can be nested 
describe('POST /todos', () => {
    
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        // supertest - makes the request
        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect((res).body.text).toBe(text);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }

                // call .find with no arguments fetches everything in the collection
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });
});

it('should not create todo with invalid body data', (done) => {

    request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err){
                 return done(err);
             }

             Todo.find().then((todos) => {
                 expect(todos.length).toBe(0);
                 done();
             }).catch((e) => done(e));
        });
});