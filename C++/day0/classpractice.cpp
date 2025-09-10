#include<iostream>
using namespace std;
class classpractice
{
    int id;
    public:
    void accept();
    void display();
    void setId(int);
    int getId();
};
void classpractice::accept(){
    cout<<"Enter id"<<endl;
    cin>>id;
}
void classpractice::display(){
    cout<<"Your id = "<<id<<endl;
}
void classpractice::setId(int newId){
    id=newId;
}
int classpractice::getId(){
    return id;
}
int main(){
    classpractice cp;
    int id;
    cp.accept();
    cp.display();
    cp.setId(44);
    cout<<"Your new Id = "<<cp.getId()<<endl;
}