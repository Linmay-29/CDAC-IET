#include<iostream>
#include<fstream>
using namespace std;
int main(){
//    if(!my_file){
//     cout << "Error opening the file." << endl;
//     return 1;
//    }
    
//    string line;
//    ofstream my_file;
//    my_file.open("Sample.txt");
//    my_file << "Heloooooo";
//    my_file.close();
//    ifstream my_file1("Sample.txt");
//    while(getline(my_file1,line)){
//         cout<<line;
//    }

    string line;
    fstream my_file;
    my_file.open("Sample.txt");
    my_file << "new World";
    my_file.seekg(0);
    while(!my_file.eof()){
    getline(my_file,line);
    cout<<line;
    cout<<endl;
    }
    my_file.close();
}