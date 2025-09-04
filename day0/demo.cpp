#include <iostream>
using namespace std;
struct Employee {
    int id;
    int arr[10];
    double sal;
};
int main(){
    struct Employee e1;
    for(int i=0;i<=9;i++){
        cin>>e1.arr[i];
    }
    for(int i=0;i<=9;i++){
        cout<<e1.arr[i];
    }
    
}