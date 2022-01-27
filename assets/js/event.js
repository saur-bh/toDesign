// app js

new Vue({
    el: '#events',
    
    data: {
          order: 1,
        event: { name: '', description: '', date: '' },
        events: []
      },
  
      ready: function() {
          this.fetchEvents();
      },
  
      methods: {
        fetchEvents: function() {
          var events = [
                  {
                      id: 1,
                      name: 'Film Premiere',
                      description: 'Go watch that movie.',
                      date: '2016-09-11'
                  },
                  {
                      id: 2,
                      name: 'Hangover',
                      description: 'It\'s your own fault.',
                      date: '2016-11-01'
                  },
                  {
                      id: 3,
                      name: 'Add Firebase Support',
                      description: 'Free, hosted database, none of this JS BS.',
                      date: '2016-09-15'
                  },
                  {
                      id: 4,
                      name: 'Bonfire Night',
                      description: 'Hotdogs and pyrotechnics.',
                      date: '2016-11-04'
                  },
                  {
                      id: 5,
                      name: 'Halloween',
                      description: 'Get my costume on, get my drink on.',
                      date: '2016-10-31'
                  }
          ];
  
          this.$set('events', events);
        },
  
          addEvent: function() {
              if(this.event.name) {
                  this.events.push(this.event);
                  this.event = { name: '', description: '', date: '' };
              }
          },
          
          deleteEvent: function(index) {
              if (confirm('Are you sure you want to delete this event?')) {
                  this.events.splice(index,1);
              }
          }
      }
  })