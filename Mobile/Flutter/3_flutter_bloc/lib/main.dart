import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutterblock/4_cubit.dart';
import 'package:flutterblock/childComponent.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return BlocProvider<CounterCubit>(
      create: (ctx) => CounterCubit(),
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: MyHomePage(title: 'Flutter Demo Home Page'),
      )
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  void initState() {
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: BlocListener<CounterCubit, CounterState>(
        listener: (ctx, state) {
          state.wasIncremented
            ? ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('counter was incremented')
              )
            )
            : ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text('counter was decremented')
              )
            );
        },
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              BlocBuilder<CounterCubit, CounterState>(builder: (_, state) {
                return Text(state.value.toString());
              }),
              ElevatedButton(
                onPressed: () => BlocProvider.of<CounterCubit>(context).increment(),
                child: Text('+'),
              ),
              ElevatedButton(
                onPressed: () => BlocProvider.of<CounterCubit>(context).decrement(),
                child: Text('-'),
              ),
            ],
          ),
        ),
      )
    );
  }
}
