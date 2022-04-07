import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { backgroundColor, } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.info}>
        <View style={styles.profilePic}></View>
        <View style={styles.details}>
          <Text style={styles.names}>Napo Ramaota</Text>
          <Text style={styles.studentNum}>901013599</Text>
          <Text style={styles.class}>Bssm</Text>
          <Text style={styles.year}>Year 2 Semester 2</Text>
        </View>
      </ScrollView >
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
            <View style={styles.semesterNum}><Text style={styles.semesterNum}>Semester 3</Text></View>
            
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
    margin:10,
    borderRadius:20,

  },
  info:{
    width:'90%',
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
    flexDirection: 'row',
    marginTop: 30,
    backgroundColor:'#dbffc4',
    width:'90%',
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
  }
});
