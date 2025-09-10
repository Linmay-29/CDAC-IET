#include<iostream>
using namespace std;
class Demo{
    int id;
    public:
    Demo(){
        cout<<"In no arg constructor"<<endl;
    }
    Demo(int id){
        this->id=id;
        cout<<"In Para constructor"<<endl;
    }
    void display(){
        cout<<"Id = "<<id; 
    }
};
int main(){
    Demo obj1;
    //obj1.display();
    Demo obj2(101);
    obj2.display();
}