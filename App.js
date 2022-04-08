import { StatusBar,useSta } from 'react-native';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ScrollView } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require('./assets/pic.png')} style={{width:100,height:100, borderRadius:50}} />
        </View>
        <View style={styles.info} >
          <Text style={{fontWeight:'bold',fontSize:26}}>Napo Ramaota</Text>
          <Text style={styles.studentNum} >901013599</Text>
          <Text style={{fontWeight:'bold'}}>BSCSM</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
            <Text style={styles.butn}> Edit </Text>
            <Text style={styles.butn}> Settings </Text>
            
          </View>
        </View>
      </View>
      <ScrollView >
        <View style={styles.results}>
        <View style={styles.semesters}>
          <View style={styles.semester}>
            <Text style={styles.semesterNum}>Semester 4</Text>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Module</Text>
                <Text style={styles.moduleGrade}>Grades</Text>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Mobile Device Programing</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Software Design & modelling</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>C++ Programing 2</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Java Programing 1</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Probability & Statistics</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Database System</Text>
                <View style={styles.process}>
                  <View style={styles.time}/>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.semester}>
            <View style={styles.semesterNum}>
              <Text style={styles.semesterNum}>Semester 3</Text>
            </View>
            
            <View style={styles.moduleInfo}>
            <View style={styles.module}>
                <Text style={styles.moduleName}>Module</Text>
                <Text style={styles.moduleGrade}>Grades</Text>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Calculas 2</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Principles of Web Design</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Fundmentals of Iternet Technology</Text>
                 <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C-</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Multimedia Technology</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B+</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>C++ Programing 1</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C+</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Data Communication & Networking</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.semester}>
            <Text style={styles.semesterNum}>Semester 2</Text>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Calculus</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C-</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introductionto Data Communication</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Digital Imaging</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Digital Graphics</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Multimedia</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B-</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Databaces</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.semester}>
            <Text style={styles.semesterNum}>Semester 1</Text>
            <View style={styles.moduleInfo}>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Creative Studies</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Principles of Programing Logic & Design</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Fundamentals of Design</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B-</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Introduction to Computer skills</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C+</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Business Communication</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>C+</Text>
                </View>
              </View>
              <View style={styles.module}>
                <Text style={styles.moduleName}>Algebra</Text>
                <View style={styles.moduleGrade}>
                  <Text style={styles.grade}>B</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060608',
    alignItems: 'center',
  },
  results:{
    width:'100%',
    alignItems:'center'
  },
  module:{
    flexDirection:'row',
    margin:5
  },
  semesters:{
    backgroundColor:"gray",
    width:'95%',
    margin:'5%',
    borderRadius:20,

  },
  info:{
    width:'100%',
    backgroundColor:'blue',
    
  },
  semester:{
    backgroundColor:'#ddd',
    margin:10,
    borderRadius:10,
    padding:10
    
  },
  moduleName:{
    width:'70%'
  },
  semesterNum:{
    fontWeight:'bold',
    backgroundColor:'#70d70b',
    color:'#fff',
    padding:3,
    borderRadius:9
  },
  info:{
    marginLeft:30,
    
    padding:5,
    
  },
  profilePic:{
    height:200,
    backgroundColor: '#fff'
  
  },
  moduleInfo:{
    margin:5
  },
  process:{
    backgroundColor:'gray',
    height:10,
    width:65,
    borderRadius:50,
    borderColor:'gray',
    borderWidth:1,
    shadowColor:'white',
  },
  time:{
    backgroundColor:'#70d70b',
    height:'100%',
    width:'50%',
    borderRadius:30
  },
  moduleGrade:{
    width:'20%',
    alignItems:'center'
  },
  grade:{
    fontWeight:'bold'
  },
  header:{
    flexDirection:'row',
    backgroundColor:'#B2FF59',
    padding:10,
    width:'95%',
    borderRadius:20,
    alignItems:'flex-start',
    margin:'5%'
  },
  studentNum:{
    fontWeight:"bold",
    fontStyle:'italic',
    color:'#fff',
    fontSize:20
  },
  butn:{
    borderRadius:40,
    borderColor:'#000',
    borderWidth:1,
  }
});
