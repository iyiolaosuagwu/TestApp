<template>
  <div>
    <Nav/>
    <div class="container">
      <div class="col-lg-6 mx-auto text-left">
        <div class="div mt-4">
          <h4 class>My view of Me</h4>
          <p
            class
          >Lorem ipsum dolor sit amet consectetur adipisicing elit Tempora magnam temporibus.</p>
          <span class="tp-4 mb-5">Scoring</span>
          <br>
          <span class="text-mark">1)No, this is not me</span>
          <br>
          <span class="text-mark">2)Not Quite me</span>
          <br>
          <span class="text-mark">3)This is me</span>
          <br>
        </div>
        <div>
          <p class="" v-for="quest in Questions" :key="quest.id">
            <p v-if="errors.length">
              <ul>
              <b>Please correct the following error(s):</b>
                <li class="errr alert-danger" v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
              </ul>
            </p>
            <form @submit.prevent="onSubmit" method="post">
              <div class="card mt-3">
                <span class="text-header">1</span>
                <p class="text-sub" v-for="quest in Questions" :key="quest.id">
                  {{quest.questions[0]}}
                </p>

                <div class="row text-center pb-1">
                  <div class="col-4">
                    <input type="radio" id="one" value="One" v-model="Fq" class="form-radio" required>
                    <label for="one">1</label>
                  </div>
                  <div class="col-4">
                    <input type="radio" id="two" value="Two" v-model="Fq" class="form-radio" required>
                    <label for="two">2</label>
                  </div>
                  <div class="col-4">
                    <input type="radio" id="three" value="Three" v-model="Fq" class="form-radio" required>
                    <label for="three">3</label>
                  </div>
                </div>
              </div>


              <div class="card mt-3">
                <span class="text-header">2</span>
                <p class="text-sub" v-for="quest in Questions" :key="quest.id">
                  {{quest.questions[1]}}
                </p>

                <div class="row text-center pb-1">
                  <div class="col-4">
                    <input type="radio" id="four" value="Four" v-model="Sq" class="form-radio" required>
                    <label for="four">1</label>
                  </div>
                  <div class="col-4">
                    <input type="radio" id="five" value="Five" v-model="Sq" class="form-radio" required>
                    <label for="five">2</label>
                  </div>
                  <div class="col-4">
                    <input type="radio" id="six" value="Six" v-model="Sq" class="form-radio" required>
                    <label for="six">3</label>
                  </div>
                </div>
              </div>


              <div class="card mt-3">
                <span class="text-header">3</span>
                <p class="text-sub" v-for="quest in Questions" :key="quest.id">
                  {{quest.questions[2]}}
                </p>

                <div class="row text-center pb-1">
                  <div class="col-4">
                    <input type="radio" id="seven" value="Seven" v-model="Tq" class="form-radio" required>
                    <label for="seven">1</label>
                  </div>
                  <div class="col-4">
                    <input type="radio" id="eight" value="Eight" v-model="Tq" class="form-radio" required>
                    <label for="eight">2</label>
                  </div>
                  <div class="col-4">
                    <input type="radio" id="nine" value="Nine" v-model="Tq" class="form-radio" required>
                    <label for="nine">3</label>
                  </div>
                </div>
              </div>


              <div class="text-center mt-3 mb-5">
                <input class="btn btn-block btn-danger " type="submit" value="Submit">
              </div>
            </form>
        </div>

        <!-- <p v-if="errors.length">
          <ul>
          <b>Please correct the following error(s):</b>
            <li class="alert-danger" v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
          </ul>
        </p> -->

        <!-- <form @submit.prevent="onSubmit" method="post">
          <div class="card mt-3">
            <span class="text-header">1</span>
            <p
              class="text-sub"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati veritatis accusamus quos incidunt et, dolorem eveniet quasi magnam aut. Debitis.</p>

            <div class="row text-center pb-1">
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option22" name="Fq" class="" type="radio" v-model="Fq" value="1" />
                </div>
              </div>
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option23" name="Fq" class="" type="radio" v-model="Fq" value="1" />
                </div>
              </div>
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option24" name="Fq" class="" type="radio" v-model="Fq" value="1" />                
                </div>
              </div>
            </div>
          </div>

          <div class="card mt-3">
            <span class="text-header">2</span>
            <p
              class="text-sub"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati veritatis accusamus quos incidunt et, dolorem eveniet quasi magnam aut. Debitis.</p>

            <div class="row text-center pb-1">
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option25" name="Sq" class="" type="radio" v-model="Sq" value="2" />
                </div>
              </div>
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option26" name="Sq" class="" type="radio" v-model="Sq" value="2" />
                </div>
              </div>
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option27" name="Sq" class="" type="radio" v-model="Sq" value="2" />                
                </div>
              </div>
            </div>
          </div>

          <div class="card mt-3">
            <span class="text-header">3</span>
            <p
              class="text-sub"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex obcaecati veritatis accusamus quos incidunt et, dolorem eveniet quasi magnam aut. Debitis.</p>

            <div class="row text-center pb-1">
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option28" name="Tq" class="" type="radio" v-model="Tq" value="3" />
                </div>
              </div>
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option29" name="Tq" class="" type="radio" v-model="Tq" value="3" />
                </div>
              </div>
              <div class="col-4">
                <div class="inputGroup2 btn">
                  <input id="option23" name="Tq" class="" type="radio" v-model="Tq" value="3" />                
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-3 mb-5">
            <input class="btn btn-block btn-danger " type="submit" value="Submit">
          </div>
        </form> -->
      </div>
    </div>
  </div>
</template>


<script>
import Nav from "./nav";
import axios from "axios";

export default {
  components: {
    Nav
  },
  data(){
    return {
    Fq: '',
    Sq: '',
    Tq: '',
    errors: [],
    Questions: []
    }
  },
  	created() {
    this.getQuestions();
    console.log(this.Questions)
    
	},
  methods: {
    getQuestions(){
      
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMDAwMDAwMDMiLCJpYXQiOjE1MzM2NDQwOTMsImV4cCI6MTU2NTA5MzY5M30.oMv_mQN6mAAmAVrRAozC7Ytk3omAye9P_TQ8Xyg3VOE"

      var header = {
        headers: {
          'x-access-token' : token
        } 
      }

      axios.get("http://test.natterbase.com:3002/questions", header)
      .then(res => {
        this.Questions.push(res.data);
        // console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    }
    ,
    onSubmit(e) {
      if(this.Fq && this.Sq && this.Tq) {
        this.errors = [];

        setTimeout(() => {
          window.location.href = 'successful';
        }, 2000)
	
        return;
      } 

      if(!this.Fq) this.errors.push("question 1 feild required.");
      if(!this.Sq) this.errors.push("question 2 feild required.");
      if(!this.Tq) this.errors.push("question 3 feild required.");
      e.preventDefault();
      this.Timeout()
    },
    Timeout() {
			setTimeout(() => {
       this.errors = ''
			}, 2500);
		},
  }
};
</script>

<style scoped>
.text-sub{
  font-size: 14px;
  padding: 5px;
}

.text-mark{
  font-size: 14px;
}

.text-header{
  padding: 5px;
}

li{
  list-style: none;
  margin: 5px;
  padding: 5px;
}


.form-radio
{
     -webkit-appearance: none;
     -moz-appearance: none;
     appearance: none;
     display: inline-block;
     position: relative;
     background-color: #f1f1f1;
     color: green;
     top: 10px;
     height: 30px;
     width: 30px;
     border: 0;
     border-radius: 50px;
     cursor: pointer;     
     margin-right: 7px;
     outline: none;
}
.form-radio:checked::before
{
     position: absolute;
     font: 13px/1 'Open Sans', sans-serif;
     left: 11px;
     top: 7px;
     content: '\02143';
     transform: rotate(40deg);
}
.form-radio:hover
{
     background-color: #f7f7f7;
}
.form-radio:checked
{
     background-color: #f1f1f1;
}
label
{
     font: 300 16px/1.7 'Open Sans', sans-serif;
     color: #666;
     cursor: pointer;
} 
</style>
