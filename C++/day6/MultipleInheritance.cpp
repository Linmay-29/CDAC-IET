#include<iostream>
using namespace std;
class A{
    public:
    A(){
        cout<<"In class A constructor"<<endl;
    }
    void display();
};
void A::display(){
    cout<<"In class A"<<endl;
}
class B{
    public:
    B(){
        cout<<"In class B constructor"<<endl;
    }
    void display();
};
void B::display(){
    cout<<"In class B"<<endl;
}
class C:public B,public A{
    public:
    C(){
        cout<<"In class C constructor"<<endl;
    }
    void display();
};
void C::display(){
    A::display();
    B::display();
    cout<<"In class C"<<endl;
}
int main(){
    C *a1 = new C(); 
    //a1->display();
}
 