#include<iostream>
using namespace std;
class Demo{
    public:
    static void show();
    //  {
    //     cout<<"Hello static show"<<endl;
    // }
    
};
void Demo::show(){
    cout<<"Hello declared static"<<endl;
}
int main(){
    Demo obj1;
    obj1.show();
}